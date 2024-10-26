export function animate(scene, camera, rendering)
{
    function updateAnimation()
    {
        // Appel récurrent
        requestAnimationFrame(updateAnimation);
        
        // Le rendu
        rendering.render(scene, camera);
    }

    updateAnimation();
}