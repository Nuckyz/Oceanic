"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
const Guild_1 = __importDefault(require("./Guild"));
const ScheduledEvent_1 = __importDefault(require("./ScheduledEvent"));
class StageInstance extends Base_1.default {
    /** The associated stage channel. */
    channel;
    /** @deprecated If the stage channel is discoverable */
    discoverableDisabled;
    /** The guild of the associated stage channel. */
    guild;
    /** The [privacy level](https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level) of this stage instance. */
    privacyLevel;
    /** The scheduled event for this stage instance. */
    scheduledEvent;
    /** The topic of this stage instance. */
    topic;
    constructor(data, client) {
        super(data.id, client);
        this.update(data);
    }
    update(data) {
        if (data.channel_id !== undefined)
            this.channel = this._client.getChannel(data.channel_id);
        if (data.discoverable_disabled !== undefined)
            this.discoverableDisabled = data.discoverable_disabled;
        if (data.guild_id !== undefined)
            this.guild = this._client.guilds.get(data.guild_id);
        if (data.guild_scheduled_event_id !== undefined)
            this.scheduledEvent = (this.guild instanceof Guild_1.default ? this.guild.scheduledEvents.get(data.guild_scheduled_event_id) : undefined) || { id: data.guild_scheduled_event_id };
        if (data.privacy_level !== undefined)
            this.privacyLevel = data.privacy_level;
        if (data.topic !== undefined)
            this.topic = data.topic;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            channel: this.channel.id,
            discoverableDisabled: this.discoverableDisabled,
            guild: this.guild.id,
            scheduledEvent: this.scheduledEvent instanceof ScheduledEvent_1.default ? this.scheduledEvent.toJSON() : this.scheduledEvent?.id,
            topic: this.topic
        };
    }
}
exports.default = StageInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhZ2VJbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmVzL1N0YWdlSW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFFMUIsb0RBQTRCO0FBQzVCLHNFQUE4QztBQU85QyxNQUFxQixhQUFjLFNBQVEsY0FBSTtJQUM5QyxvQ0FBb0M7SUFDcEMsT0FBTyxDQUFlO0lBQ3RCLHVEQUF1RDtJQUN2RCxvQkFBb0IsQ0FBVTtJQUM5QixpREFBaUQ7SUFDakQsS0FBSyxDQUFRO0lBQ2Isb0pBQW9KO0lBQ3BKLFlBQVksQ0FBNkI7SUFDekMsbURBQW1EO0lBQ25ELGNBQWMsQ0FBNkI7SUFDM0Msd0NBQXdDO0lBQ3hDLEtBQUssQ0FBUztJQUNkLFlBQVksSUFBc0IsRUFBRSxNQUFjO1FBQ2pELEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVTLE1BQU0sQ0FBQyxJQUErQjtRQUMvQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBRSxDQUFDO1FBQzVGLElBQUksSUFBSSxDQUFDLHFCQUFxQixLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3JHLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBQ3RGLElBQUksSUFBSSxDQUFDLHdCQUF3QixLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssWUFBWSxlQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDMU4sSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDN0UsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdkQsQ0FBQztJQUVRLE1BQU07UUFDZCxPQUFPO1lBQ04sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE9BQU8sRUFBZSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtZQUMvQyxLQUFLLEVBQWlCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxjQUFjLEVBQVEsSUFBSSxDQUFDLGNBQWMsWUFBWSx3QkFBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDNUgsS0FBSyxFQUFpQixJQUFJLENBQUMsS0FBSztTQUNoQyxDQUFDO0lBQ0gsQ0FBQztDQUNEO0FBckNELGdDQXFDQyJ9