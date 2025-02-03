import { contactSchema, TContactFormValues } from "@/constants";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input, message } from "antd";
import emailjs from "@emailjs/browser";
import { SyncOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import { useState } from "react";
import { cn } from "@/lib/utils";

type TContactProps = {
  className?: string;
  textColor?: string;
  inputBgColor?: string;
  inputTextColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  buttonHoverColor?: string;
  placeholderTextColor?: string;
};

const Contact = ({
  className,
  textColor,
  inputBgColor,
  inputTextColor,
  buttonTextColor,
  buttonHoverColor,
  buttonBgColor,
  placeholderTextColor,
}: TContactProps) => {
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
    <div className="flex flex-col items-center justify-center md:h-[75vh]">
      <div
        className={cn(
          "max-w-lg mx-auto p-6 bg-white shadow-xl rounded-lg border border-gray-200",
          className
        )}
      >
        <h2
          className={cn(
            "text-3xl font-semibold text-center mb-4 text-gray-800",
            textColor
          )}
        >
          Contact Us
        </h2>
        <p className={cn("text-gray-600 text-center mb-6", textColor)}>
          Have questions? Fill out the form below and we'll get back to you
          shortly.
        </p>

        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <Form.Item
            label={
              <span
                style={{
                  color: inputTextColor,
                }}
              >
                Full Name
              </span>
            }
            validateStatus={errors.name ? "error" : ""}
            help={errors.name?.message}
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="John Doe"
                  className={cn(
                    inputBgColor,
                    inputTextColor,
                    placeholderTextColor,
                    "p-2 rounded-md"
                  )}
                  style={{
                    backgroundColor: inputBgColor,
                    color: inputTextColor,
                    caretColor: inputTextColor,
                  }}
                />
              )}
            />
          </Form.Item>

          {/* Email Field */}
          <Form.Item
            label={
              <span
                style={{
                  color: inputTextColor,
                }}
              >
                Email
              </span>
            }
            validateStatus={errors.email ? "error" : ""}
            help={errors.email?.message}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="you@example.com"
                  className={cn(
                    inputBgColor,
                    inputTextColor,
                    placeholderTextColor,
                    "p-2 rounded-md"
                  )}
                  style={{
                    backgroundColor: inputBgColor,
                    color: inputTextColor,
                    caretColor: inputTextColor,
                  }}
                />
              )}
            />
          </Form.Item>

          {/* Subject Field */}
          <Form.Item
            label={
              <span
                style={{
                  color: inputTextColor,
                }}
              >
                Subject
              </span>
            }
            validateStatus={errors.subject ? "error" : ""}
            help={errors.subject?.message}
          >
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter your subject"
                  className={cn(
                    inputBgColor,
                    inputTextColor,
                    placeholderTextColor,
                    "p-2 rounded-md"
                  )}
                  style={{
                    backgroundColor: inputBgColor,
                    color: inputTextColor,
                    caretColor: inputTextColor,
                  }}
                />
              )}
            />
          </Form.Item>

          {/* Message Field */}
          <Form.Item
            label={
              <span
                style={{
                  color: inputTextColor,
                }}
              >
                Message
              </span>
            }
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
                  className={cn(
                    inputBgColor,
                    inputTextColor,
                    placeholderTextColor,
                    "p-2 rounded-md"
                  )}
                  style={{
                    backgroundColor: inputBgColor,
                    color: inputTextColor,
                    caretColor: inputTextColor,
                  }}
                />
              )}
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            className={cn(
              `w-full text-lg transition-colors duration-300 hover:${buttonHoverColor}`,
              buttonBgColor,
              buttonTextColor,
            )}
            style={{
              backgroundColor: buttonBgColor,
              color: buttonTextColor,
            }}
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
