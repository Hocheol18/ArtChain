export interface LoginInterface {
  username: string | undefined;
  password: string | undefined;
}

export interface UserErnollInterface {
  memberId: string;
  password: string;
  name: string;
  email: string;
  bankName: string;
  bankAccount: string;
  isConfirm: boolean;
}

export interface BusinessEnrollInterface {
  memberId: string;
  password: string;
  name: string;
  email: string;
  bankName: string;
  bankAccount: string;
  tel: string;
  businessRegistrationNumber: string;
  isConfirm: boolean;
}

export interface SignUpPermissionInterface {
  memberId: number;
  permissionFlag: string;
}
