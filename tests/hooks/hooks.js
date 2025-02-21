import { createBdd } from 'playwright-bdd';
import fs from 'fs';
import path from 'path';


const { Before, After, BeforeAll, AfterAll,  } = createBdd();

Before(async({page})=>{    
    console.log("🔥 Iniciando la prueba...");
    await page.goto('https://www.demoblaze.com')
});

After(async()=>{
    console.log("This is a After.")
    console.log("❌ Cerrando la página después de cada escenario...");
});

BeforeAll(async({browser})=>{    
    //const page = chromium.launch();
});

AfterAll(async () => {
    console.log("🧹 Eliminando la carpeta .features-gen...");

    const generatedDir = path.join(__dirname, '../../.features-gen');

    if (fs.existsSync(generatedDir)) {
        fs.rm(generatedDir, { recursive: true, force: true }, (err) => {
            if (err) {
                console.error("❌ Error al eliminar la carpeta .features-gen:", err);
            } else {
                console.log("✅ Carpeta .features-gen eliminada correctamente.");
            }
        });
    } else {
        console.log("📂 No se encontró la carpeta .features-gen, omitiendo limpieza.");
    }
});