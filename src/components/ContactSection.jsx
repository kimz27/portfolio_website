import { Facebook, Instagram, Linkedin, Mail, Map, Phone, Twitter,Send, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";


export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",  
        message: ""
    })
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

  
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
            alert("Message sent successfully!");
            setFormData({
                name: "",   
                email: "",
                message: "" })
        })
        .catch(() => alert("Sorry! Something went wrong. Please try again."));

        setIsSubmitting(true);
        
        setTimeout(() =>{
            toast({
                title: "Message Sent!",
                description: "Thank you for reaching out! I'll get back to you soon.",
                // variant: "success",
            });
            setIsSubmitting(false);
        },1500);

    };
    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
              </h2>

              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project idea or interested in collaborating? I’m always open to new opportunities. Feel free to reach out!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8"> 
                    <h3 className="text-2xl font-semibold mb-6"> 
                        {" "}
                        Contact Information
                    </h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Email </h4>
                                <a href="mailto: kimzmuta@gmail.com" 
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                        kimzmuta@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone </h4>
                                <a href="tel:+260969937032" 
                                    className="text-muted-foreground hover:text-primary transmition-colors">
                                        (+260) 969 937 032
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Location </h4>
                                <a 
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                        PHI, Lusaka, Zambia.
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4"> Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/kimz-mutale/" target="_blank">
                                <Linkedin/>
                            </a>
                            <a href="https://x.com/KimzMutale" target="_blank">
                                <Twitter/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs"
                >
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label 
                                htmlFor="name"
                                className="block text-sm font-medium mb-2"
                            >
                                {" "}
                                Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                required 
                                value={formData.name}
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Kimz Mutale"
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                        </div>
                        <div>
                            <label 
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                            >
                                {" "}
                                Your Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                required 
                                value={formData.email}
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="example@gmail.com"
                                onChange={(e)=> setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div>
                            <label 
                                htmlFor="message"
                                className="block tetx-sm font-medium mb-2"

                            >
                                {" "}
                                Your Message
                            </label>
                            <textarea 
                                id="message" 
                                name="message"
                                required 
                                value={formData.message}
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello i would like to talk about..."
                                onChange={(e) => setFormData({...formData, message : e.target.value})}
                                />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting} 
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                        >
                             {isSubmitting ? "Sending.." : "Send Message"}
                            <Send size={16} />
                        </button>
                    </form>
                </div>
              </div>
            </div>
        </section>
    );
}