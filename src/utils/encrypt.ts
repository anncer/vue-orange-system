// import PUBLIC_KEY from "@/assets/public.key";
const PUBLIC_KEY =
  "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgVt4gqPbRI6I+hx3bX9pOPQzpoRNXO+zA5el5gTmhOE6mpfJFmg+097/Msn879H/REZfn2GGT+jGug4WbR5gMKA2G/73M0gfK69Uo6vdS0zMeUeDreAsYG5appgBt3P5zziG/1HCzwjw4Wft57owhDVJFOpkO65n6gKiNR3q6pbelVm2UZcLCSJDF/tt4DhKdyaBwK0xFJ/wRGPKBVBmu1uJKN4KbIQQjhr52BelUdrMJAI+d53ZjNkudK4TVkQikmSpHHYGji/rQ1OKEjSEEanqoGy5oDfzP6Xr//oMMSEAPLFOweJEx77omRKUkmwp4RYKUfy0F1ln8OxAWNrQfQIDAQAB";
import JSEncrypt from "jsencrypt";

const encryptor = new JSEncrypt();
encryptor.setPublicKey(PUBLIC_KEY);

export default (data: object): string => {
  const raw = typeof data === "object" ? JSON.stringify(data) : data;
  return `Bearer ${encryptor.encrypt(raw)}`;
};
