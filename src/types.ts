export interface ImageSlot {
  id: string;
  name: string;
  section: string;
  recommendedAspect: string;
  recommendedDimensions: string;
  description: string;
  currentUrl: string;
  isPlaceholder?: boolean;
}

export interface StudentProfile {
  id: string;
  confectionerName: string;
  businessName: string;
  primaryColor: string;
  accentColor: string;
  city: string;
  specialty: string;
  sampleProduct: string;
  samplePrice: string;
  schoolTag: string;
}

export interface PartnerFormState {
  schoolName: string;
  contactName: string;
  email: string;
  phone: string;
  cityState: string;
  studentsPerSemester: string;
  notes: string;
}
