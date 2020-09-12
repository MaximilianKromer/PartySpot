
export function calcDistance(position1, position2) {
    const distance_const = 111120;

    const latInMeter = distance_const;
    const longInMeter = distance_const * Math.cos(position1.latitude * Math.PI / 180);

    const distanceLat = Math.abs(position2.latitude - position1.latitude);
    const distanceLong = Math.abs(position2.longitude - position1.longitude);

    const distanceLatInMeter = distanceLat * latInMeter;
    const distanceLongInMeter = distanceLong * longInMeter;

    const distance = Math.sqrt(Math.pow(distanceLatInMeter, 2) + Math.pow(distanceLongInMeter, 2));

    return Math.round((distance / 1000));
}