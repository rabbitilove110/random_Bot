const { SlashCommandBuilder, CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName("진화1")
        .setDescription("1단계 진화 (97%)"),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async run(interaction){
        const zinhwa = Math.random() * 99;
        const channel = interaction.client.channels.cache.find((channel) => {
            return channel.id === "1326494716329721919";
        });
        channel.send(`1단계 진화 시도!\n진화 난수 : ${zinhwa}`);
        if(zinhwa > 97){
            await interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle("진화 실패")
                    .setDescription(`진화에 실패했습니다!\n1단계 ~ 3단계 실패 보상 : 10000원 자유 휙득!`)
                    .setColor('Red')
                ]
            })
        } else {
            await interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle("진화 성공")
                    .setDescription(`진화에 성공했습니다!\n1단계 성공보상 : 15000원 자유 휙득!`)
                    .setColor('Green')
                ]
            })
        }
    }
}