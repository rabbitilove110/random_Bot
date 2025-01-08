const { SlashCommandBuilder, CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName("챌린지2")
        .setDescription("챌린지2 안내"),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async run(interaction){
        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle("진화 - 챌린지 2 안내")
                .setDescription(`1분동안 간지럼을 참기 -> 1번 못참고 데시벨이 60 넘어갈시 3,000원씩 깎임 (쿨타임은 3초)\n간지럼은 2명이서 진심으로 가능, 누워서 참기 가능, 몸으로 입막기 금지\n최저값 10,000원까지 떨어질수 있음`)
                .setColor('Purple')
            ]
        })
    }
}