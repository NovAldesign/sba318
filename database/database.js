export default [
    // Category 1: Applicants (Potential Members)
    {
        id: 1,
        category: "applicants",
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
        industry: "Finance",
        tier: "gold",
        status: "pending"
    },
    // Category 2: Membership Tiers (Definitions)
    {
        id: 2,
        category: "tiers",
        tierName: "The Collective First (Gold)",
        price: "$$$"
    },
    // Category 3: Reviews (Admin Feedback)
    {
        id: 3,
        category: "reviews",
        applicantId: 1,
        note: "Excellent professional background, perfect for the gold tier.",
        decision: "approved"
    },
    // Adding a fourth item to match your example structure
    {
        id: 4,
        category: "applicants",
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "987-654-3210",
        industry: "Technology",
        tier: "silver",
        status: "pending"
    }
];