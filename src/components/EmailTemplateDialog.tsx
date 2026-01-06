import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Settings } from "lucide-react";
import { toast } from "sonner";

interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
}

const EmailTemplateDialog = () => {
  const [open, setOpen] = useState(false);
  const [template, setTemplate] = useState<EmailTemplate | null>(null);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      fetchTemplate();
    }
  }, [open]);

  const fetchTemplate = async () => {
    const { data, error } = await supabase
      .from("email_templates")
      .select("*")
      .eq("name", "Default")
      .single();

    if (!error && data) {
      setTemplate(data);
      setSubject(data.subject);
      setBody(data.body);
    }
  };

  const handleSave = async () => {
    if (!template) return;
    
    setSaving(true);
    const { error } = await supabase
      .from("email_templates")
      .update({ subject, body, updated_at: new Date().toISOString() })
      .eq("id", template.id);

    if (!error) {
      toast.success("Email template saved");
      setOpen(false);
    } else {
      toast.error("Failed to save template");
    }
    setSaving(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Settings className="w-4 h-4" />
          Email Template
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Email Template Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="subject">Subject Line</Label>
            <Input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter email subject..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="body">Email Body</Label>
            <Textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter email body..."
              rows={10}
              className="resize-none"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            This template will be used when clicking the email button on any contact.
          </p>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save Template"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailTemplateDialog;
