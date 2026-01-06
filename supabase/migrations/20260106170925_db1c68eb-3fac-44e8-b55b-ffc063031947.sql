-- Create contact_categories table
CREATE TABLE public.contact_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contacts table with contact tracking fields
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES public.contact_categories(id) ON DELETE SET NULL,
  business_name TEXT NOT NULL,
  email TEXT,
  mobile_number TEXT,
  status TEXT NOT NULL DEFAULT 'Lead',
  link TEXT,
  notes TEXT,
  last_contacted_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
  contact_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create email_templates table
CREATE TABLE public.email_templates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL DEFAULT 'Default',
  subject TEXT NOT NULL DEFAULT '',
  body TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user_emails table
CREATE TABLE public.user_emails (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  credits INTEGER NOT NULL DEFAULT 0,
  monthly_credits INTEGER NOT NULL DEFAULT 0,
  max_monthly_credits INTEGER NOT NULL DEFAULT 100,
  status TEXT NOT NULL DEFAULT 'active',
  last_copied_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Disable RLS for now (public access)
ALTER TABLE public.contact_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_emails ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since there's no auth in current app)
CREATE POLICY "Allow public read access on contact_categories" ON public.contact_categories FOR SELECT USING (true);
CREATE POLICY "Allow public insert on contact_categories" ON public.contact_categories FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on contact_categories" ON public.contact_categories FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on contact_categories" ON public.contact_categories FOR DELETE USING (true);

CREATE POLICY "Allow public read access on contacts" ON public.contacts FOR SELECT USING (true);
CREATE POLICY "Allow public insert on contacts" ON public.contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on contacts" ON public.contacts FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on contacts" ON public.contacts FOR DELETE USING (true);

CREATE POLICY "Allow public read access on email_templates" ON public.email_templates FOR SELECT USING (true);
CREATE POLICY "Allow public insert on email_templates" ON public.email_templates FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on email_templates" ON public.email_templates FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on email_templates" ON public.email_templates FOR DELETE USING (true);

CREATE POLICY "Allow public read access on user_emails" ON public.user_emails FOR SELECT USING (true);
CREATE POLICY "Allow public insert on user_emails" ON public.user_emails FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on user_emails" ON public.user_emails FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on user_emails" ON public.user_emails FOR DELETE USING (true);

-- Insert default email template
INSERT INTO public.email_templates (name, subject, body) 
VALUES ('Default', 'Hello', 'Hi there,\n\nI wanted to reach out...\n\nBest regards');