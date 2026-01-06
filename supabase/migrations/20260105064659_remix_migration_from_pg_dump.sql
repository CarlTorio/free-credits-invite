CREATE EXTENSION IF NOT EXISTS "pg_graphql";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "plpgsql";
CREATE EXTENSION IF NOT EXISTS "supabase_vault";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";
BEGIN;

--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 18.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



--
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    SET search_path TO 'public'
    AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;


SET default_table_access_method = heap;

--
-- Name: user_emails; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_emails (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    email text NOT NULL,
    status text DEFAULT 'Activated'::text NOT NULL,
    credits integer DEFAULT 5 NOT NULL,
    monthly_credits integer DEFAULT 0 NOT NULL,
    max_monthly_credits integer DEFAULT 30 NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    last_copied_at timestamp with time zone,
    CONSTRAINT user_emails_status_check CHECK ((status = ANY (ARRAY['Activated'::text, 'Errors'::text])))
);


--
-- Name: user_emails user_emails_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_emails
    ADD CONSTRAINT user_emails_pkey PRIMARY KEY (id);


--
-- Name: user_emails update_user_emails_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_user_emails_updated_at BEFORE UPDATE ON public.user_emails FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: user_emails Allow public delete access; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public delete access" ON public.user_emails FOR DELETE USING (true);


--
-- Name: user_emails Allow public insert access; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public insert access" ON public.user_emails FOR INSERT WITH CHECK (true);


--
-- Name: user_emails Allow public read access; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public read access" ON public.user_emails FOR SELECT USING (true);


--
-- Name: user_emails Allow public update access; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public update access" ON public.user_emails FOR UPDATE USING (true);


--
-- Name: user_emails; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.user_emails ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--




COMMIT;