-- Extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";   -- busca textual fuzzy
CREATE EXTENSION IF NOT EXISTS "unaccent";  -- busca sem acentos

-- Database de testes
CREATE DATABASE autobridge_test;
GRANT ALL PRIVILEGES ON DATABASE autobridge_test TO autobridge;
