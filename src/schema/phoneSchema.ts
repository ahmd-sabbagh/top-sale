import { z } from "zod";

export const getPhoneSchema = (t: (key: string) => string) =>
  z.object({
    phone: z.string().regex(/^[3567]\d{7}$/, {
      message: t("validation_phone"),
    }),
  });

export type PhoneSchemaType = z.infer<ReturnType<typeof getPhoneSchema>>;
