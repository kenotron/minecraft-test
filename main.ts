let blockSlot = 0
player.onChat("run", function () {
    agent.setItem(POLISHED_ANDESITE, 64, 1)
    agent.setItem(LAPIS_LAZULI_BLOCK, 64, 2)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            toggleBlock()
            agent.place(FORWARD)
            agent.move(FORWARD, 1)
        }
        agent.move(UP, 1)
    }
})
function toggleBlock () {
    blockSlot = (blockSlot + 1) % 2 + 1
}
