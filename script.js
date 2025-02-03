function sendWhatsAppInvite() {
    let message = encodeURIComponent(
        "You're invited to my 40th Birthday Celebration! 🎉\n\n" +
        "📅 Date: March 15, 2025\n" +
        "📍 Location: Sunset Beach Resort, California\n" +
        "🎶 Activities: Music, Dance, Dinner, and Fun Games\n\n" +
        "Click the link below to RSVP!\n" +
        "https://example.com"
    );
    let whatsappURL = `https://api.whatsapp.com/send?text=${message}`;
    window.open(whatsappURL, "_blank");
}
