// ─── Enums ────────────────────────────────────────────────────────────────────

export type UserType = 'PF' | 'PJ' | 'ADMIN';
export type UserStatus = 'ACTIVE' | 'INACTIVE' | 'BLOCKED';
export type KycStatus = 'NOT_SUBMITTED' | 'PENDING' | 'APPROVED' | 'REJECTED';

export type VehicleStatus = 'DRAFT' | 'INSPECTION_PENDING' | 'INSPECTION_IN_PROGRESS' | 'INSPECTION_APPROVED' | 'LISTED' | 'SOLD';
export type FuelType = 'GASOLINE' | 'ETHANOL' | 'FLEX' | 'DIESEL' | 'ELECTRIC' | 'HYBRID';
export type TransmissionType = 'MANUAL' | 'AUTOMATIC' | 'CVT';

export type InspectionType = 'REMOTE' | 'PRESENTIAL';
export type InspectionStatus = 'PENDING' | 'MEDIA_SUBMITTED' | 'PROCESSING' | 'AWAITING_REVIEW' | 'APPROVED' | 'REJECTED';
export type MediaType = 'PHOTO' | 'VIDEO';

export type ListingStatus = 'ACTIVE' | 'SOLD' | 'EXPIRED' | 'INACTIVE';

export type ProposalStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'COUNTER' | 'EXPIRED';

export type DealerPlan = 'BASIC' | 'PREMIUM' | 'ENTERPRISE';
export type DealerStatus = 'PENDING' | 'ACTIVE' | 'SUSPENDED';

// ─── User ─────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string | null;
  type: UserType;
  status: UserStatus;
  kycStatus: KycStatus;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  user: User;
}

// ─── Vehicle ──────────────────────────────────────────────────────────────────

export interface Vehicle {
  id: string;
  ownerId: string;
  plate: string;
  chassis: string | null;
  renavam: string | null;
  brand: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  fuelType: FuelType;
  transmission: TransmissionType;
  fipeCode: string | null;
  fipePrice: number | null;
  status: VehicleStatus;
  createdAt: string;
  updatedAt: string;
}

// ─── Inspection ───────────────────────────────────────────────────────────────

export interface InspectionMedia {
  id: string;
  inspectionId: string;
  url: string;
  type: MediaType;
  label: string | null;
  sortOrder: number;
  createdAt: string;
}

export interface Inspection {
  id: string;
  vehicleId: string;
  inspectorId: string | null;
  type: InspectionType;
  status: InspectionStatus;
  aiScore: number | null;
  aiFlags: string[];
  notes: string | null;
  reviewedAt: string | null;
  createdAt: string;
  updatedAt: string;
  vehicle?: Vehicle;
  media?: InspectionMedia[];
}

// ─── Listing ──────────────────────────────────────────────────────────────────

export interface Listing {
  id: string;
  vehicleId: string;
  sellerId: string;
  inspectionId: string;
  title: string;
  description: string | null;
  price: number;
  acceptsExchange: boolean;
  acceptsFinancing: boolean;
  city: string;
  state: string;
  views: number;
  status: ListingStatus;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
  vehicle?: Vehicle;
  seller?: Pick<User, 'id' | 'name' | 'phone' | 'avatarUrl'>;
  inspection?: Pick<Inspection, 'id' | 'aiScore'>;
  _count?: { proposals: number };
}

// ─── Proposal ─────────────────────────────────────────────────────────────────

export interface Proposal {
  id: string;
  listingId: string;
  buyerId: string;
  amount: number;
  message: string | null;
  status: ProposalStatus;
  counterAmount: number | null;
  respondedAt: string | null;
  createdAt: string;
  updatedAt: string;
  listing?: Pick<Listing, 'id' | 'title' | 'price'>;
  buyer?: Pick<User, 'id' | 'name' | 'avatarUrl'>;
}

// ─── Chat ─────────────────────────────────────────────────────────────────────

export interface ChatMessage {
  id: string;
  listingId: string;
  senderId: string;
  content: string;
  readAt: string | null;
  createdAt: string;
  sender?: Pick<User, 'id' | 'name' | 'avatarUrl'>;
}

// ─── Dealer ───────────────────────────────────────────────────────────────────

export interface Dealer {
  id: string;
  userId: string;
  companyName: string;
  cnpj: string;
  plan: DealerPlan;
  status: DealerStatus;
  createdAt: string;
  user?: Pick<User, 'id' | 'name' | 'email'>;
}

// ─── FIPE ─────────────────────────────────────────────────────────────────────

export interface FipeBrand {
  code: string;
  name: string;
}

export interface FipeModel {
  code: number;
  name: string;
}

export interface FipePrice {
  value: string;
  brand: string;
  model: string;
  modelYear: number;
  fuel: string;
  codeFipe: string;
  referenceMonth: string;
  vehicleType: number;
  fuelAcronym: string;
}

// ─── Pagination ───────────────────────────────────────────────────────────────

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// ─── Admin ────────────────────────────────────────────────────────────────────

export interface AdminDashboardStats {
  totalUsers: number;
  activeListings: number;
  pendingInspections: number;
  awaitingReviewInspections: number;
  totalDealers: number;
}
