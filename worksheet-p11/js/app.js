import { state, muat, setDaftarOlahraga } from "./state.js";
import { pasangPendengar } from "./events.js";
import { render } from "./dom.js";
import { ambilDataOlahraga } from "./api.js";

async function inisialisasi() {
  const simpanan = muat();
  if (simpanan && simpanan.kategoriAktif) {
    state.kategoriAktif = simpanan.kategoriAktif;
  }

  pasangPendengar();

  try {
    const dataApi = await ambilDataOlahraga();
    if (dataApi && dataApi.length > 0) {
      setDaftarOlahraga(dataApi);
    } else {
      render(state);
    }
  } catch {
    render(state);
  }
}

inisialisasi();