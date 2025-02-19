export type TValidateLoginDetailResponse = {
  success: boolean;
  message: string;
  responseData: TValidateLoginDetailData;
};

export type TValidateLoginDetailData = {
  userName: string;
  token: string;
  refreshToken: string;
};
