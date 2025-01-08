const { SlashCommandBuilder, CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName("진화14")
        .setDescription("14단계 진화 (25%)"),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async run(interaction){
        const zinhwa = Math.random() * 99;
        const channel = interaction.client.channels.cache.find((channel) => {
            return channel.id === "1326494716329721919";
        });
        channel.send(`14단계 진화 시도!\n진화 난수 : ${zinhwa}`);
        if(zinhwa > 25){
            await interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle("진화 실패")
                    .setDescription(`진화에 실패했습니다!\n13단계 ~ 15단계 실패 보상 : 45,000원 깊카 (기적의 검, 라스트 워, Kpop 피아노타일, Uno, 길건너 친구들, 의지의 히어로, 라이더, 슈퍼펭귄, 무한의 계단 中 1개) 휙득!`)
                    .setColor('Red')
                ]
            })
        } else {
            await interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle("진화 성공")
                    .setDescription(`진화에 성공했습니다!\n14단계 성공보상 : 50,000원 카페 휙득!`)
                    .setColor('Green')
                ]
            })
        }
    }
}