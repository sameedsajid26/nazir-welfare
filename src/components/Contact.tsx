import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Instagram } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "923002332718";
  const defaultMessage = encodeURIComponent(
    "Assalamu Alaikum! I'd like to get in touch with Nazir Welfare regarding:"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            For queries, donations, or volunteering – reach out to us on WhatsApp or Instagram. 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                Call Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Give us a call for any inquiries.
              </p>
              <a
                href="tel:+923002332718"
                className="text-primary hover:underline text-lg font-semibold"
              >
                +92 300 2332718
              </a>
            </CardContent>
          </Card>

          <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-green-500/20 hover:border-green-500/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-600" />
                WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Send us a message for queries, donations, or volunteering.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Message on WhatsApp
              </a>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 overflow-hidden group hover:shadow-lg transition-all duration-300 border-pink-500/20 hover:border-pink-500/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-pink-600" />
                Instagram
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Follow us for updates and reach out via DM for any questions, donations, or if you'd like to volunteer.
              </p>
              <a
                href="https://www.instagram.com/nazirwelfare/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @nazirwelfare
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
