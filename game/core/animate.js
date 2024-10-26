export function animate(scene, camera, rendering, world, synchronizeObjects, player)
{
    function updateAnimation()
    {
        // Appel récurrent
        requestAnimationFrame(updateAnimation);

        // Mettre à jour le monde phyisque
        world.step(1 / 60);

        // Mettre à jour les objets
        synchronizeObjects();
        
        // Mettre à jour le joueur
        player.updatePlayer()

        // Le rendu
        rendering.render(scene, camera);
    }

    updateAnimation();
}