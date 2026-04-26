1. THE BLOCKS (Master Data / Foundation Entities)

These are the raw Lego pieces. They stand alone as a centralized repository before being assembled.

1.1. Entity Directory (Stakeholders)

1.1.1. Clients

1.1.1.a. Internal (LNG Company / L&G)

1.1.1.b. External Partners (STREAM, Sinemart, DRM)

1.1.2. Agency

1.1.2.a. Managed Brands Portfolio (Relational mapping/linking to Master Brands in 1.1.3)

1.1.3. Brand (Independent entity; can be Direct or Agency-managed)

1.1.3.a. Sub-Brand / Category

1.1.3.b. Product / SKU

1.1.4. Legal & Tax Profiles: (Tax IDs/NPWP, Business Registration/NIB, Finance PICs for each entity above - Crucial for the Finance Module).

1.2. Resource Directory (Company Assets)

1.2.1. Hosts / Talents

1.2.1.a. Internal IP

1.2.1.b. External Affiliates

1.2.1.c. Guest Stars / DA (Dangdut Academy)

1.2.2. Studios / Rooms

1.2.2.a. [Attribute] Room Capacity

1.2.2.b. [Attribute] Dedicated Brand Tagging

1.2.3. Platforms

1.2.3.a. TikTok

1.2.3.b. Shopee

1.2.3.c. Tokopedia

1.2.3.d. Instagram

1.2.4. Digital Account Registry:

1.2.4.a. Managed Seller Center Accounts

1.2.4.b. Affiliate / Creator Accounts

1.2.4.c. Official Brand Accounts

1.2.5. Equipment Assets:

1.2.5.a. Cameras & Visuals

1.2.5.b. Lighting Systems

1.2.5.c. Livestreaming Smartphones

1.2.5.d. [Relation] Allocation Tag (Linked to specific Studio)

1.3. Catalog & Pricing (Service Offerings)

1.3.1. Master SOWs (Standardized Service Blocks)

1.3.1.a. Livestreaming Hours (Hourly / Session-based metric)

1.3.1.b. Short Video Production (Deliverable / URL-based metric)

1.3.1.c. Ads Top-Up / Targeted Plan (Budget pass-through metric)

1.3.1.d. Event / Offline Activation (Project-based metric)

1.3.2. Rate Cards (Dynamic Pricing: Host A + Studio B = Rate C)

2. THE ASSEMBLY BOARD (Project Management & Commercial)

This is the "Lego Board". The area where the Commercial/Sales team assembles pieces from Area 1 into a customized business agreement.

2.1. Project Container (Main Wrapper)

2.1.1. Project ID & Name

2.1.2. Client & Stakeholder Matrix (Project Ownership Structure)

2.1.2.a. Ownership Scope

Pure Internal

Pure External

Joint-Hybrid

2.1.2.b. Contracting Party (Billing Target)

Direct Brand

Agency

Internal Division

2.1.2.c. Represented Brands: (List of Brands executed under an Agency) [Relation to Agencies & Brands]

2.1.3. Timeline (Start & End Date)

2.1.4. Revenue Scheme Tag: (Determines billing logic in Module 5)

Flat Fee

Commission-Based

Hybrid (Flat Fee + Commission)

2.1.5. Target & KPI Configuration: (Target Setting for GMV, ROAS, Views).

2.2. Plug-and-Play SOWs (Attributes & Triggers)

Within a single Project, Sales can attach multiple SOW blocks. Each block automatically triggers different operational modules:

2.2.1. SOW: Livestream Hours

-> Triggers: Room & Host Scheduling (Module 3)

-> Triggers: Digital Account Allocation (Module 3)

-> Triggers: SOW Ledger / Burn Record (Module 4)

2.2.2. SOW: Short Video Production

-> Triggers: Host Scheduling

-> Triggers: Video QC Workflow (Module 4)

2.2.3. SOW: Ads / Targeted Plan

-> Triggers: Ads Budgeting & Debit Note Generator (Module 5)

2.2.4. SOW Attribute: "Require Samples"

-> Triggers: Mini-WMS / Sample Mgt (Mandatory inbound reporting)

-> Triggers: Return SLA Flagging (Return Optional / Return Mandatory)

2.3. Commercial & Legal Configurations

2.3.1. Pricing Calculation (Total value of attached SOWs)

2.3.2. Buffer & Contingency Allocation (Operational safety net funds)

2.3.3. Document Generator

2.3.3.a. Initial Agreements / SPK (Master contract generation)

2.3.3.b. Addendums (Contract modification and SOW top-ups)

2.3.3.c. [Feature] Document Versioning & Audit Trail (Tracking v1, v2, v3)

2.3.4. Commission Split Rules (L&G vs Talent percentage split)

2.3.5. Tax Configuration:

2.3.5.a. Value Added Tax / VAT (PPN applied to Client Invoicing / AR)

2.3.5.b. Withholding Tax / PPh (PPh 21/23 deducted from Talent/Agency Payouts / AP)

3. THE ENGINE RUNNER (Resource & Execution Operations)

When a Project (Lego Board) is activated, the operational engine starts based on the "Triggers" from the SOWs above.

3.1. Scheduling Control Center

3.1.1. Studio Blocking & Reservation (Booking transactional logic)

3.1.2. Multi-Tenant Calendar View (Unified visibility UI across all projects)

3.1.3. Host Assignment (Includes pairing Hosts with the correct Digital Accounts).

3.1.4. Substitution Board (Replacement roster for absent Hosts)

3.2. Field Execution

3.2.1. Actual Time Logging (Clock-in / Clock-out)

3.2.2. Off-site Logging (Overseas events / non-studio broadcasts)

3.2.3. Sample & Inventory Operations (Mini-WMS Execution)

3.2.3.a. Inbound & Receiving (Logging items received from Clients/Brands)

3.2.3.b. Internal Movement & Allocation (Tracking transfers: Main Warehouse <-> Dedicated Studios)

3.2.3.c. Item Status & Condition Tracking (Good, Damaged, Expired)

3.2.3.d. Return & Disposal Handling (Executing SLA returns to clients or dead-stock disposal)

4. THE TRACKER & SCORER (Data & Campaign Engine)

The tracking engine ensures "SOW Promises" are fulfilled and calculates the actual transaction value for commission payouts.

4.1. Fulfillment Tracker

4.1.1. SOW Ledger (Real-time quota burn record)

4.1.2. Deliverable & Asset Repository

4.1.2.a. Content Asset Library (Cloud links to raw files, edited videos, thumbnails)

4.1.2.b. QC Approval Workflow (Status tracking: Draft -> In Review -> Approved -> Revision)

4.1.2.c. Publication Proofing (Live broadcast URLs, published video URLs, 24h metric screenshots)

4.1.3. BAST / Handover Certificate Generator (Auto-compiled proof of completion based on approved deliverables and burnt SOW)

4.2. Data Linkage (Binding Data to Projects)

4.2.1. Store ID Mapping (Linking e.g., 'CNF Store' data to the 'Brand Republic' Project)

4.2.2. Affiliate URL Mapping

4.3. Data Crunching Machine

4.3.1. CSV/Excel Uploader (Shopee & TikTok Sales Data)

4.3.2. Upsert Rule Engine (Prevents data duplication for multi-batch Shopee extracts)

4.3.3. Attribution Rule Engine (Click Time vs. Complete Time logic)

4.3.4. Commission Rule Engine (Direct vs. Indirect Order logic for Shopee)

4.3.5. Ads Spend Data Uploader: (Recording actual Ad spend from platforms for ROI/ROAS calculations).

5. THE BANK (Financial & Billing)

The spearhead of cash flow. Translating numbers from the Data Engine (Area 4) into invoices and payouts.

5.1. Inbound (Accounts Receivable / AR)

5.1.1. Invoicing (Service Fee + VAT)

5.1.2. Debit Note (Ads Reimbursement Billing based on Actual Spend)

5.2. Outbound (Accounts Payable / AP & Payouts)

5.2.1. Payout Engine (Net creator/partner commission calculation minus Withholding Tax)

5.2.2. TP Commission Splitter (Securing L&G's "Hidden 3% Revenue" from Targeted Plans)

5.3. Cost Control

5.3.1. Buffer & Expense Ledger (Tracking operational contingency fund usage on the ground)

6. THE OBSERVATORY (Analytics Dashboard)

Management's eagle eye to oversee all assembled and running Lego blocks.

6.1. Financial Level

6.1.1. Stream Profitability (Net profit per project/business model)

6.1.2. Margin Leakage Tracker (Monitoring unbilled buffer/ads expenses)

6.1.3. Cashflow Health (AR/AP Aging & Outstanding Invoices)

6.2. Operational Level

6.2.1. SOW Burn Rate Tracker (Pace of deliverable completion)

6.2.2. Resource Utilization Rate (Idle vs. Active hours for Hosts & Studios)

6.3. Campaign Level

6.3.1. Platform Insights (Shopee vs. TikTok performance comparison)

6.3.2. Performer GMV Leaderboard (Top converting hosts/talents)

6.3.3. Actual vs. Target Tracker (Real-time GMV/ROAS vs. KPI configuration)
