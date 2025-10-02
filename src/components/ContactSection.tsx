
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Send, Sparkles, MessageCircle, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
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
    setIsSending(false);

      })
      .catch((error) => {
          toast.error("Failed to send message. Please try again.");
    setIsSending(false);

        });
   
  };

  return (
    <section id="contact" className="relative py-20 px-6 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/5 via-blue-500/5 to-transparent dark:from-primary/10 dark:via-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/5 via-pink-500/5 to-transparent dark:from-purple-500/10 dark:via-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t("Let's Connect")}</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-primary to-gray-900 dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {t("Get In Touch")}
            </motion.h2>
            
            <motion.div 
              className="h-1.5 w-24 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
            
            <motion.p 
              className="text-muted-foreground max-w-2xl dark:text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {t("Have a project in mind or want to discuss potential opportunities? Feel free to reach out!")}
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.3}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-semibold dark:text-white">{t("Contact Information")}</h3>
              </div>
              
              <div className="space-y-4">
                {/* Email Card */}
                <motion.div 
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-100 dark:border-blue-900/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 dark:text-white flex items-center gap-2">
                        {t("Email")}
                        <Zap className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <a href="mailto:talktoboda01@gmail.com" className="text-muted-foreground hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium break-all">
                        talktoboda01@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              
                {/* Phone Card */}
                <motion.div 
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-100 dark:border-green-900/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 overflow-hidden"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all duration-300" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 dark:text-white flex items-center gap-2">
                        {t("Phone")}
                        <Zap className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <a href="tel:+201271175532" className="text-muted-foreground hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition-colors font-medium">
                        +20 127 117 5532
                      </a>
                    </div>
                  </div>
                </motion.div>
              
                {/* Location Card */}
                <motion.div 
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border border-orange-100 dark:border-orange-900/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 overflow-hidden"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-300" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 dark:text-white flex items-center gap-2">
                        {t("Location")}
                        <Zap className="w-4 h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-muted-foreground dark:text-gray-300 font-medium">
                        6th of October City, Giza, Egypt
                      </p>
                    </div>
                  </div>
                </motion.div>
              
                {/* Social Links */}
                <motion.div 
                  className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-100 dark:border-purple-900/50 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="text-lg font-semibold mb-4 dark:text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    {t("Connect with me")}
                  </h4>
                  <div className="flex gap-3 flex-wrap">
                    <motion.a 
                      href="https://github.com/apdo978" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white shadow-lg hover:shadow-gray-800/50 group relative overflow-hidden"
                      aria-label="GitHub Profile"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Github size={24} className="relative z-10" />
                    </motion.a>
                    <motion.a 
                      href="https://linkedin.com/in/apdo978/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077B5] to-[#00A0DC] flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/50 group relative overflow-hidden"
                      aria-label="LinkedIn Profile"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00A0DC] to-[#0077B5] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Linkedin size={24} className="relative z-10" />
                    </motion.a>
                    <motion.a 
                      href="https://www.facebook.com/apdo9788" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1877F2] to-[#0C63D4] flex items-center justify-center text-white shadow-lg hover:shadow-blue-600/50 group relative overflow-hidden"
                      aria-label="Facebook Profile"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0C63D4] to-[#1877F2] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Facebook size={24} className="relative z-10" />
                    </motion.a>
                    <motion.a 
                      href="https://api.whatsapp.com/send/?phone=0201271175532&text&type=phone_number&app_absent=0" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow-lg hover:shadow-green-500/50 group relative overflow-hidden"
                      aria-label="WhatsApp Contact"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#128C7E] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp relative z-10"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M9.5 13.5c.5 1 1 1.5 2.5 1.5s2-.5 2.5-1.5"/></svg>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative p-8 rounded-3xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-2xl">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-blue-500 to-purple-500 opacity-20 blur-xl -z-10" />
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold dark:text-white">{t("Send Me a Message")}</h3>
                </div>
            
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                              <Input
                                placeholder={t("First Name")}
                                className="w-full h-12 px-4 rounded-xl bg-white dark:bg-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 focus:border-primary dark:focus:border-primary transition-all duration-300"
                                {...field}
                              />
                            </motion.div>
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
                            <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                              <Input
                                placeholder={t("Last Name")}
                                className="w-full h-12 px-4 rounded-xl bg-white dark:bg-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 focus:border-primary dark:focus:border-primary transition-all duration-300"
                                {...field}
                              />
                            </motion.div>
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
                            <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                              <Input
                                placeholder={t("Phone Number")}
                                className="w-full h-12 px-4 rounded-xl bg-white dark:bg-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 focus:border-primary dark:focus:border-primary transition-all duration-300"
                                {...field}
                              />
                            </motion.div>
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
                            <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                              <Input
                                type="email"
                                placeholder={t("Your Email")}
                                className="w-full h-12 px-4 rounded-xl bg-white dark:bg-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 focus:border-primary dark:focus:border-primary transition-all duration-300"
                                {...field}
                              />
                            </motion.div>
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
                            <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                              <Textarea
                                placeholder={t("Your Message")}
                                className="w-full min-h-[140px] px-4 py-3 rounded-xl bg-white dark:bg-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 focus:border-primary dark:focus:border-primary transition-all duration-300 resize-none"
                                {...field}
                              />
                            </motion.div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        disabled={isSending}
                        className="w-full h-12 rounded-xl bg-gradient-to-r from-primary via-blue-600 to-purple-600 hover:from-primary/90 hover:via-blue-600/90 hover:to-purple-600/90 text-white font-semibold shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        {isSending ? (
                          <>
                            <Loader2 className="animate-spin h-5 w-5" />
                            <span>{t("Sending...")}</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>{t("Send Message")}</span>
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
