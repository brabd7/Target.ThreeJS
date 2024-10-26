// Fonction pour les contrôles du mouvement
export function moveControls(player)
{
    // Touche enfoncée
    document.addEventListener('keydown', (event) => {
        switch (event.code)
        {
            case "KeyW":
                player.moveForward = true;
                break;
            case "KeyQ":
                player.moveLeft = true;
                break;
            case "KeyD":
                player.moveRight = true;
                break;
            case "KeyS":
                player.moveBackward = true;
                break;
            default:
                break;
        }
    })

    // Touche relevée
    document.addEventListener('keyup', (event) => {
        switch (event.code)
        {
            case "KeyW":
                player.moveForward = false;
                break;
            case "KeyQ":
                player.moveLeft = false;
                break;
            case "KeyD":
                player.moveRight = false;
                break;
            case "KeyS":
                player.moveBackward = false;
                break;
            default:
                break;
        }
    })
}

