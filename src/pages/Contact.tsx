import { contactSchema, TContactFormValues } from "@/constants";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input, message } from "antd";
import emailjs from "@emailjs/browser";
import { SyncOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import { useState } from "react";
import { cn } from "@/lib/utils";

type TContactProps = {
  className?: string;
};

const Contact = ({ className }: TContactProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: TContactFormValues) => {
    setIsLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          reply_to: data.email,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );
      message.success("Your message has been sent successfully!");
      toast.success("Your message has been sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      message.error("Oops! Something went wrong. Please try again.");
      toast.error("Oops! Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center md:h-[75vh]"
    >
      <div className={cn("max-w-lg mx-auto p-6 bg-white shadow-xl rounded-lg border border-gray-200", className)}>
        <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Have questions? Fill out the form below and we'll get back to you
          shortly.
        </p>

        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <Form.Item
            label="Full Name"
            validateStatus={errors.name ? "error" : ""}
            help={errors.name?.message}
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<UserOutlined />}
                  placeholder="John Doe"
                />
              )}
            />
          </Form.Item>

          {/* Email Field */}
          <Form.Item
            label="Email Address"
            validateStatus={errors.email ? "error" : ""}
            help={errors.email?.message}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<MailOutlined />}
                  placeholder="you@example.com"
                />
              )}
            />
          </Form.Item>

          {/* Subject Field */}
          <Form.Item
            label="Subject"
            validateStatus={errors.subject ? "error" : ""}
            help={errors.subject?.message}
          >
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Enter your subject" />
              )}
            />
          </Form.Item>

          {/* Message Field */}
          <Form.Item
            label="Message"
            validateStatus={errors.message ? "error" : ""}
            help={errors.message?.message}
          >
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <Input.TextArea
                  {...field}
                  rows={4}
                  placeholder="Type your message here..."
                />
              )}
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            className="w-full text-lg"
            icon={isLoading ? <SyncOutlined spin /> : undefined}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
