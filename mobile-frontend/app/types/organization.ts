interface Organization {
  id: number;
  name: string;
  zip_code: string;
  address: string;
  city: string;
  state: string;
  description: string;
  owner: number;
  organization_type: string;
  logo: string;
  cover_image: string;
  email: string;
  phone_number: string;
  website: string;
}

export type { Organization };