import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref<{ email: string; role: string } | null>(null);

  const isAdmin = computed(() => user.value?.role === "admin");

  const login = (email: string, role: string) => {
    user.value = { email, role };
  }
  const logout = () => {
    user.value = null;
  }

  return { user, isAdmin, login, logout };
});
