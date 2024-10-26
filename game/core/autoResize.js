export function autoResize(rendering, camera)
{
    window.addEventListener('resize', () => {
        // Adapter la taille du renderer à la nouvelle taille de la fenêtre
        rendering.setSize(window.innerWidth, window.innerHeight);
        
        // Mettre à jour l'aspect ratio de la caméra
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();  // Nécessaire pour recalculer la projection
    })
}
