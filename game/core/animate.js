export function animate(scene, camera, rendering, updateObjects, player)
{
    function updateAnimation()
    {
        // Appel récurrent
        requestAnimationFrame(updateAnimation);

        // Mettre à jour à la caméra en fonction des contrôles du joueur
        player.cameraControl.update();

        // Mettre à jour les objets
        updateObjects();
        
        // Le rendu
        rendering.render(scene, camera);
    }

    updateAnimation();
}