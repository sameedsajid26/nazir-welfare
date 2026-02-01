import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, Send, CheckCircle2, Droplets, Gift, Shirt, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GeneralDonation = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    donationType: "",
    amount: "",
    customAmount: "",
    reason: "",
  });

  const donationAmounts = [
    { value: "1000", label: "PKR 1,000" },
    { value: "2500", label: "PKR 2,500" },
    { value: "5000", label: "PKR 5,000" },
    { value: "10000", label: "PKR 10,000" },
    { value: "18000", label: "PKR 18,000 - Water Pump" },
    { value: "25000", label: "PKR 25,000" },
    { value: "50000", label: "PKR 50,000" },
    { value: "custom", label: "Custom amount" },
  ];

  const donationTypes = [
    { value: "water-pump", label: "Water Pump Installation" },
    { value: "food", label: "Food Distribution" },
    { value: "clothing", label: "Clothing Distribution" },
    { value: "education", label: "Education Support" },
    { value: "emergency", label: "Emergency Relief" },
    { value: "general", label: "General Welfare" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const finalAmount = formData.amount === "custom" ? formData.customAmount : formData.amount;

    const message = `💝 *New Donation Request*

📝 *Donor Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || "Not provided"}

💰 *Donation Details:*
• Type: ${donationTypes.find(t => t.value === formData.donationType)?.label || formData.donationType}
• Amount: PKR ${finalAmount}

📌 *Message:*
${formData.reason || "No message provided"}

---
Sent via Nazir Welfare Website`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "85256184233";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Thank you for your generosity! 🤲",
      description: "We will contact you shortly to complete the donation process.",
    });

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        donationType: "",
        amount: "",
        customAmount: "",
        reason: "",
      });
    }, 3000);
  };

  const impactItems = [
    { icon: <Droplets className="w-5 h-5" />, label: "Clean Water", color: "bg-blue-500" },
    { icon: <Gift className="w-5 h-5" />, label: "Food Support", color: "bg-orange-500" },
    { icon: <Shirt className="w-5 h-5" />, label: "Clothing", color: "bg-emerald-500" },
    { icon: <Users className="w-5 h-5" />, label: "Community", color: "bg-purple-500" },
  ];

  return (
    <section id="donate" className="py-20 relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Make a Difference Today</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Support Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Your donation helps us bring clean water, food, clothing, and hope to communities in need. 
            Every contribution, no matter how small, creates lasting change.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Left side - Info */}
          <div className="space-y-6">
            <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Your Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {impactItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white`}>
                        {item.icon}
                      </div>
                      <span className="font-medium text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Fill the Form</h4>
                      <p className="text-sm text-muted-foreground">Enter your details and select donation amount</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">We Contact You</h4>
                      <p className="text-sm text-muted-foreground">Our team will reach out to arrange payment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Make an Impact</h4>
                      <p className="text-sm text-muted-foreground">Your donation directly helps those in need</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Donation form */}
          <Card className="border-primary/30 bg-background/80 backdrop-blur-md shadow-xl">
            <CardHeader className="text-center border-b border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                Donate Now
              </CardTitle>
              <CardDescription>
                Fill in your details and we'll contact you to complete the donation
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">JazakAllah Khair!</h3>
                  <p className="text-muted-foreground">
                    Thank you for your generous intention. We will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="gen-name">Full Name *</Label>
                      <Input
                        id="gen-name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gen-phone">Phone Number *</Label>
                      <Input
                        id="gen-phone"
                        type="tel"
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gen-email">Email (Optional)</Label>
                    <Input
                      id="gen-email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gen-donationType">Donation Type *</Label>
                    <Select
                      value={formData.donationType}
                      onValueChange={(value) => setFormData({ ...formData, donationType: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="What would you like to support?" />
                      </SelectTrigger>
                      <SelectContent>
                        {donationTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gen-amount">Donation Amount *</Label>
                    <Select
                      value={formData.amount}
                      onValueChange={(value) => setFormData({ ...formData, amount: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select amount or enter custom" />
                      </SelectTrigger>
                      <SelectContent>
                        {donationAmounts.map((amount) => (
                          <SelectItem key={amount.value} value={amount.value}>
                            {amount.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.amount === "custom" && (
                    <div className="space-y-2">
                      <Label htmlFor="gen-customAmount">Custom Amount (PKR) *</Label>
                      <Input
                        id="gen-customAmount"
                        type="number"
                        placeholder="Enter amount in PKR"
                        value={formData.customAmount}
                        onChange={(e) => setFormData({ ...formData, customAmount: e.target.value })}
                        required
                        min="100"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="gen-reason">Message (Optional)</Label>
                    <Textarea
                      id="gen-reason"
                      placeholder="Any special message or dedication..."
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="min-h-[80px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Donation Request
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Your information is kept confidential. We'll contact you to complete the donation.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GeneralDonation;

