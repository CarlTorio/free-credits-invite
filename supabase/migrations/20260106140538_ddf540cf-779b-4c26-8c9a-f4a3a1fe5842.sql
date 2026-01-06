-- Create contact_categories table
CREATE TABLE public.contact_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contacts table with link column
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES public.contact_categories(id) ON DELETE CASCADE,
  business_name TEXT NOT NULL,
  email TEXT,
  mobile_number TEXT,
  status TEXT NOT NULL DEFAULT 'Pending' CHECK (status IN ('Already Called', 'Pending', 'Busy')),
  link TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (no auth required)
CREATE POLICY "Allow all access to contact_categories"
  ON public.contact_categories
  FOR ALL
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow all access to contacts"
  ON public.contacts
  FOR ALL
  USING (true)
  WITH CHECK (true);