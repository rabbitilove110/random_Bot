const { SlashCommandBuilder, CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName("챌린지3")
        .setDescription("챌린지3 안내"),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async run(interaction){
        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle("진화 - 챌린지 3 안내")
                .setDescription(`생일 챙겨주는 자들 상대로 카트라이더 러쉬플러스 스피드전 1vs1 미러전또는 브롤스타즈 아무모드 1vs1 미러전 이기기 (생일자 선택, 맵 생일자 자유, 브롤기준 모드 생일자가 선택가능, 브롤기준 디버그 생일자 맘대로 선택가능)\n실패시 -> 15,000원 깎기`)
                .setColor('Purple')
            ]
        })
    }
}