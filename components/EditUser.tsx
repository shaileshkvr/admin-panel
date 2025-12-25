"use client";

import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// Importing the new decoupled primitives
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

const formSchema = z
  .object({
    username: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(30, "Name must not exceed 30 characters"),
    email: z.email("Invalid email address"),
    phone: z
      .string()
      .regex(/^\d{10,15}$/, "Invalid phone number")
      .optional(),
    location: z.string().min(2),
    role: z.enum(["admin", "user"]),
    adminToken: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.role === "admin") {
      if (!data.adminToken) {
        ctx.addIssue({
          code: "custom",
          message: "Token is mandatory",
          path: ["adminToken"],
        });
      } else if (data.adminToken.length < 8 || data.adminToken.length > 10) {
        ctx.addIssue({
          code: "custom",
          message: "Token must be between 8-10 characters",
          path: ["adminToken"],
        });
      }
    }
  });

const EditUser = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      location: "",
      role: formSchema.shape.role.options[1],
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    form.reset();
    console.log(data);
  };

  const userRole = useWatch({
    control: form.control,
    name: "role",
  });

  return (
    <SheetContent className="flex flex-col gap-2">
      <SheetHeader>
        <SheetTitle className="mb-4">Edit User</SheetTitle>
        <SheetDescription>
          Make changes to the user profile here...
        </SheetDescription>
      </SheetHeader>

      <form onSubmit={form.handleSubmit(onSubmit)} className="ml-4">
        <FieldGroup className="gap-4">
          <Controller
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>
                  <UserIcon size={16} />
                  Username
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>
                  <MailIcon size={16} />
                  Email
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>
                  <PhoneIcon size={16} /> Phone
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="location"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>
                  <MapPinIcon size={16} />
                  Location
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="role"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>
                  <UsersIcon size={16} />
                  Role
                </FieldLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                  >
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* 3. Map directly from the Zod Schema options */}
                    {formSchema.shape.role.options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          {userRole === "admin" && (
            <Controller
              name="adminToken"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Admin Token</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter admin token"
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          )}
          <Button>Save</Button>
        </FieldGroup>
      </form>
    </SheetContent>
  );
};

export default EditUser;
