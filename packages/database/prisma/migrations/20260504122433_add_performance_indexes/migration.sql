-- Performance indexes: listings, vehicles, inspections, proposals
-- Run with: pnpm --filter @conneqtcar/database db:migrate:prod

-- Listings
CREATE INDEX IF NOT EXISTS "listings_status_idx" ON "listings"("status");
CREATE INDEX IF NOT EXISTS "listings_seller_id_idx" ON "listings"("seller_id");
CREATE INDEX IF NOT EXISTS "listings_vehicle_id_idx" ON "listings"("vehicle_id");
CREATE INDEX IF NOT EXISTS "listings_status_created_at_idx" ON "listings"("status", "created_at" DESC);

-- Vehicles
CREATE INDEX IF NOT EXISTS "vehicles_owner_id_idx" ON "vehicles"("owner_id");
CREATE INDEX IF NOT EXISTS "vehicles_brand_model_idx" ON "vehicles"("brand", "model");
CREATE INDEX IF NOT EXISTS "vehicles_status_idx" ON "vehicles"("status");

-- Inspections
CREATE INDEX IF NOT EXISTS "inspections_vehicle_id_idx" ON "inspections"("vehicle_id");
CREATE INDEX IF NOT EXISTS "inspections_vehicle_id_status_idx" ON "inspections"("vehicle_id", "status");

-- Proposals
CREATE INDEX IF NOT EXISTS "proposals_listing_id_idx" ON "proposals"("listing_id");
CREATE INDEX IF NOT EXISTS "proposals_buyer_id_idx" ON "proposals"("buyer_id");
CREATE INDEX IF NOT EXISTS "proposals_listing_id_status_idx" ON "proposals"("listing_id", "status");
