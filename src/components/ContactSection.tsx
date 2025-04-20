
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLanguage } from "@/hooks/use-language";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phoneInput: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  // subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  messageName: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export default function ContactSection() {
      const { t } = useLanguage();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneInput: "",
      email: "",
      messageName: "",
    },
  });
 const [isSending, setIsSending] = useState(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    
    const SERVICE_ID = "service_67kb1dc";
    const TEMPLATE_ID = "template_y85lxo7";
    const PUBLIC_KEY = "pTJXgAYxxtFObHDBu";
     setIsSending(true);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully!");
    toast.success("Thanks for your message! I'll get back to you soon.");

      form.reset();

      })
      .catch((error) => {
          console.error(error);
          toast.error("Failed to send message. Please try again.");
        });
    setIsSending(false);
   
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("Get In Touch")}
            </h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-muted-foreground max-w-2xl dark:text-gray-300">
              {t("Have a project in mind or want to discuss potential opportunities? Feel free to reach out!")}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.3}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">{t("Contact Information")}</h3>
              
              <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 dark:text-white">{t("Email")}</h4>
                  <a href="mailto:talktobooda01@gmail.com" className="text-muted-foreground hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary">
                    talktobooda01@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 dark:text-white">{t("Phone")}</h4>
                  <a href="tel:+201271175532" className="text-muted-foreground hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary">
                    +20 127 117 5532
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 dark:text-white">{t("Location")}</h4>
                  <p className="text-muted-foreground dark:text-gray-300">
                    6th of October City, Giza, Egypt
                  </p>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="text-lg font-medium mb-4 dark:text-white">{t("Connect with me")}</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/apdo978" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    aria-label="GitHub Profile"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/apdo978/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://www.facebook.com/apdo9788" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    aria-label="Facebook Profile"
                  >
                    <Facebook size={24} />
                  </a>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=0201271175532&text&type=phone_number&app_absent=0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    aria-label="WhatsApp Contact"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M9.5 13.5c.5 1 1 1.5 2.5 1.5s2-.5 2.5-1.5"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">{t("Send Me a Message")}</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={t("First Name")}
                          className="w-full dark:bg-gray-800 dark:text-white dark:border-gray-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={t("Last Name")}
                          className="w-full dark:bg-gray-800 dark:text-white dark:border-gray-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneInput"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={t("Phone Number")}
                          className="w-full dark:bg-gray-800 dark:text-white dark:border-gray-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t("Your Email")}
                          className="w-full dark:bg-gray-800 dark:text-white dark:border-gray-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="messageName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder={t("Your Message")}
                          className="w-full min-h-[120px] dark:bg-gray-800 dark:text-white dark:border-gray-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                 
                         {isSending ? (
          <Loader2 className="animate-spin mr-2 h-4 w-4" />
        ) :  t("Send Message")}
                </Button>
              </form>
            </Form>
          </div>
        </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
