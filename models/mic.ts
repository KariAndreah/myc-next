export type MicResponse = {
  mics: Mic[];
};

export type Mic = {
  id: string;
  name: string;
  borough: string;
  day: string;
  notes: string;
  address?: {
    city?: string;
    state?: string;
    country?: string;
    latitude?: string;
    longitude?: string;
    name?: string;
    id?: number;
    number?: number;
    streetName?: string;
  };
  cost?: {
    id?: number;
    costAmount?: string;
  };
  signup?: {
    instructions?: string;
    id?: number;
  };
  host: {
    hostId: number;
    firstHost: string;
    secondHost: string;
    thirdHost: string;
    fourthHost: string;
    fifthHost: string;
  };
  time?: any;
  confirmedDate: Date;
};
