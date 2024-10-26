export function animate(scene, camera, rendering, updateObjects)
{
    function updateAnimation()
    {
        // Appel récurrent
        requestAnimationFrame(updateAnimation);

        // Mettre à jour les objets
        updateObjects();
        
        // Le rendu
        rendering.render(scene, camera);
    }

    updateAnimation();
}