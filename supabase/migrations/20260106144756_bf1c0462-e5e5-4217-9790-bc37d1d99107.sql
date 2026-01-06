-- Create email_templates table for global template storage
CREATE TABLE public.email_templates (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL DEFAULT 'Default',
  subject text NOT NULL DEFAULT '',
  body text NOT NULL DEFAULT '',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.email_templates ENABLE ROW LEVEL SECURITY;

-- Allow all access (matching existing pattern)
CREATE POLICY "Allow all access to email_templates"
ON public.email_templates
FOR ALL
USING (true)
WITH CHECK (true);

-- Insert default template
INSERT INTO public.email_templates (name, subject, body) 
VALUES ('Default', 'Partnership Inquiry', 'Hi,

I hope this email finds you well.

I am reaching out to discuss a potential partnership opportunity.

Looking forward to hearing from you.

Best regards');