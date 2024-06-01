import { z } from "zod";
import validator from "validator";

export const profileSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: "长度不能少于1个字符" }).max(10, { message: "长度不能超过10个字符" }),
  email: z.string().email({ message: "无效的电子邮件地址" }),
  phone: z
    .string().refine(validator.isMobilePhone, { message: "无效的手机号" }),
});
export type ProfileSchemaDTO = z.infer<typeof profileSchema>;
