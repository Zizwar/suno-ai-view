export type SunoSong = {
  clip: {
    id: string;
    audio_url: string;
    video_url: string;
    image_url: string;
    metadata: {
      tags: string;
      prompt: string;
    };
    play_count: number;
    upvote_count: number;
    title: string;
  };
};

export type Genre = {
  type: string;
  list: {
    desc: string;
    value: string;
  }[];
};
