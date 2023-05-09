enum TypesOfMedia {
    VIDEO = 'video',
    AUDIO = 'audio',
}

enum FormatsOfMedia {
    MP4 = '.mp4',
    MOV = '.mov',
    MKV = '.mkv',
    FLV = '.flv',
    WEBM = 'webM',
}

interface IMedia {
    name: string;
    type: TypesOfMedia;
    format: FormatsOfMedia;
    subtitles?: string;
    marks?: unknown;
}

function playMedia(
    { name, type, format, subtitles, marks }: IMedia = {
        name: 'example',
        type: TypesOfMedia.AUDIO,
        format: FormatsOfMedia.MKV,
    }
): string {
    let marksLog: string;
    if (Array.isArray(marks)) {
        marksLog = marks.join(' ');
    } else if (typeof marks === 'string') {
        marksLog = marks;
    } else {
        marksLog = 'Unsupported type of marks';
    }
    console.log(`Media ${name} ${format} is ${type}
Marks: ${marksLog!}
Subtitles: ${subtitles ?? 'none'}
  `);

    return marksLog!;
}

const params: IMedia = {
    name: 'WoW',
    format: FormatsOfMedia.MOV,
    type: TypesOfMedia.VIDEO,
    subtitles: 'hmhmhm hmhmhm doh',
    marks: ['4:30', '5:40'],
};

playMedia();
playMedia(params);
