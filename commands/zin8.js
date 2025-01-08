const { SlashCommandBuilder, CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName("진화8")
        .setDescription("8단계 진화 (60%)"),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async run(interaction){
        const zinhwa = Math.random() * 99;
        const channel = interaction.client.channels.cache.find((channel) => {
            return channel.id === "1326494716329721919";
        });
        channel.send(`8단계 진화 시도!\n진화 난수 : ${zinhwa}`);
        if(zinhwa > 60){
            await interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle("진화 실패")
                    .setDescription(`진화에 실패했습니다!\n7단계 ~ 9단계 실패 보상 : 30000원 자유 + 챌린지 1번 휙득!`)
                    .setColor('Red')
                ]
            })
        } else {
            await interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle("진화 성공")
                    .setDescription(`진화에 성공했습니다!\n8단계 성공보상 : 32000원 자유(상품권 X) 휙득!`)
                    .setColor('Green')
                ]
            })
        }
    }
}