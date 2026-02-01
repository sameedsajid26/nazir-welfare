import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, CheckCircle2, Banknote, Building, Hash } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal = ({ isOpen, onClose }: DonationModalProps) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const accountDetails = {
    bankName: "AL BARAKA",
    accountTitle: "SAJID HAMEED",
    accountNumber: "00102346006501",
    iban: "PK64AIIN0000102346006501",
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      toast({
        title: "Copied!",
        description: `${field} copied to clipboard`,
      });
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Banknote className="w-5 h-5 text-primary" />
            Bank Account Details
          </DialogTitle>
          <DialogDescription>
            Use these details to make your donation. Thank you for your generosity!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Bank Name</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(accountDetails.bankName, "Bank Name")}
                  className="h-8"
                >
                  {copiedField === "Bank Name" ? (
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground pl-6">{accountDetails.bankName}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Account Title</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(accountDetails.accountTitle, "Account Title")}
                  className="h-8"
                >
                  {copiedField === "Account Title" ? (
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground pl-6 font-semibold">{accountDetails.accountTitle}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Hash className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Account Number</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(accountDetails.accountNumber, "Account Number")}
                  className="h-8"
                >
                  {copiedField === "Account Number" ? (
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground pl-6 font-mono">{accountDetails.accountNumber}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Hash className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">IBAN</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(accountDetails.iban, "IBAN")}
                  className="h-8"
                >
                  {copiedField === "IBAN" ? (
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground pl-6 font-mono">{accountDetails.iban}</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-accent/10 rounded-lg p-4 mt-4">
          <p className="text-xs text-muted-foreground text-center">
            Please include "Nazir Welfare Donation" in the transaction reference for proper tracking.
            May Allah bless your generous contribution! 🤲
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;