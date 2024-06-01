import { useRequest } from "ahooks";

import { showErrorToast, showSuccessToast } from "@/components/ui/toast";

import { updateProfile, getProfileByID } from "../actions";

export const useUpdateProfile = () => useRequest(updateProfile, {
  manual: true,
  loadingDelay: 300,
  onSuccess() {
    showSuccessToast("已修改");
  },
  onError(error) {
    showErrorToast(`修改失败: ${error.message}`);
  },
});
export const useGetProfile = () => useRequest(() => getProfileByID(), {
  // ready,
  loadingDelay: 300,
});
