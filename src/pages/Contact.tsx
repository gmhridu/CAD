import { cn } from "@/lib/utils";
import ContactForm from "@/components/ContactForm";

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

const Contact = ({ className, textColor }: TContactProps) => {
  return (
    <div
      className={cn("flex flex-col items-center justify-center md:h-[75vh]")}
    >
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

        <ContactForm variant="full" />
      </div>
    </div>
  );
};

export default Contact;
