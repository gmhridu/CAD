import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  variant?: "simple" | "full";
  onSubmitSuccess?: () => void;
  className?: string;
}

const ContactForm = ({ 
  variant = "full", 
  onSubmitSuccess,
  className 
}: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (variant === "full") {
      if (!email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Invalid email address";
      }
      
      if (!subject.trim()) {
        newErrors.subject = "Subject is required";
      }
      
      if (!message.trim()) {
        newErrors.message = "Message is required";
      } else if (message.trim().length < 10) {
        newErrors.message = "Message must be at least 10 characters";
      }
    } else {
      if (!message.trim()) {
        newErrors.message = "Message is required";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const formData = variant === "full" 
        ? { name, email, subject, message }
        : { name, message };
      
      const endpoint = variant === "full" 
        ? "/api/send-email"
        : "/api/send-simple-email";
      
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        setName("");
        setMessage("");
        setEmail("");
        setSubject("");
        
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Oops! Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn("space-y-4", className)}
    >
      <div>
        <label 
          htmlFor="name" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={cn(
            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            errors.name ? "border-red-500" : "border-gray-300"
          )}
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {variant === "full" && (
        <>
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                errors.email ? "border-red-500" : "border-gray-300"
              )}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label 
              htmlFor="subject" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={cn(
                "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                errors.subject ? "border-red-500" : "border-gray-300"
              )}
              placeholder="Enter your subject"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
            )}
          </div>
        </>
      )}

      <div>
        <label 
          htmlFor="message" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {variant === "full" ? "Message *" : "Message"}
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={cn(
            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            errors.message ? "border-red-500" : "border-gray-300"
          )}
          placeholder={variant === "full" ? "Type your message here..." : "Your message..."}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <span className="h-4 w-4 rounded-full border-2 border-t-2 border-white border-t-transparent animate-spin mr-2"></span>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;