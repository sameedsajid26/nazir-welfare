import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Users, ExternalLink } from "lucide-react";

interface JoinUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinUsModal = ({ isOpen, onClose }: JoinUsModalProps) => {
  const contactOptions = [
    {
      icon: <MessageCircle className="w-5 h-5 text-green-600" />,
      title: "Join WhatsApp Group",
      description: "Connect with our volunteer community",
      action: "Join WhatsApp",
      link: "https://wa.me/+923001234567?text=Hi, I want to join Nazir Welfare as a volunteer",
      primary: true,
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      title: "Call Us",
      description: "Speak directly with our team",
      action: "Call Now",
      link: "tel:+923001234567",
      primary: false,
    },
    {
      icon: <Mail className="w-5 h-5 text-accent" />,
      title: "Email Us",
      description: "Send us your volunteer application",
      action: "Send Email",
      link: "mailto:volunteer@nazirwelfare.org?subject=Volunteer Application&body=Hi, I'm interested in volunteering with Nazir Welfare. Please let me know how I can get involved.",
      primary: false,
    },
  ];

  const handleContactClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Join Our Mission
          </DialogTitle>
          <DialogDescription>
            Choose how you'd like to connect with us and become part of our volunteer family.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          {contactOptions.map((option, index) => (
            <Card key={index} className={option.primary ? "ring-2 ring-green-500/20 bg-green-50/50 dark:bg-green-950/20" : ""}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">{option.icon}</div>
                    <div>
                      <h4 className="font-medium text-sm">{option.title}</h4>
                      <p className="text-xs text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant={option.primary ? "default" : "outline"}
                    onClick={() => handleContactClick(option.link)}
                    className={option.primary ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    {option.action}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/10 rounded-lg p-4 mt-4">
          <h4 className="font-medium text-sm mb-2 text-primary">What You Can Do as a Volunteer:</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Help with water pump installations</li>
            <li>• Assist in food and clothing distribution</li>
            <li>• Support Ramadan iftar drives</li>
            <li>• Community outreach and awareness</li>
            <li>• Administrative and logistics support</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JoinUsModal;