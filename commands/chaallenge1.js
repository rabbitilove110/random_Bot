const { SlashCommandBuilder, CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName("챌린지1")
        .setDescription("챌린지1 안내"),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async run(interaction){
        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle("진화 - 챌린지 1 안내")
                .setDescription(`1번 챌린지 : 보드게임 카페 (Red Button)\n신 레몬에이드, 매운 소떡소떡 -> 주는자 돈으로 2개 다 사기\n매운 소떡소떡 다 먹고 3분동안 아무것도 먹기 금지 + 데시벨 60 이상 금지\n다른거 먹었다면 -> 10,000원씩 깎기\n데시벨 실패시 3,000원씩 깎임 (쿨타임 3초)\n\n신 레몬에이드 (소떡소떡 챌린지 완료후)\n원샷하기 (얼음 뺀걸로 진행)\n신 레몬에이드 다 먹고 3분동안 아무것도 먹기 금지 + 데시벨 60 이상 금지\n데시벨 실패시 3,000원씩 깎임 (쿨타임 3초)\n원샷 실패시 -> 10,000원씩 깎기\n최저값 10,000원까지 떨어질수 있음`)
                .setColor('Purple')
            ]
        })
    }
}