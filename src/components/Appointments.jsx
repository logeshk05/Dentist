import { useState } from 'react';

const treatments = [
  { id: 'implants', name: 'Dental Implants', icon: 'fas fa-tooth', desc: 'Permanent tooth replacement' },
  { id: 'root-canal', name: 'Root Canal', icon: 'fas fa-syringe', desc: 'Pain-free nerve treatment' },
  { id: 'whitening', name: 'Teeth Whitening', icon: 'fas fa-star', desc: 'Professional brightening' },
  { id: 'cleaning', name: 'Deep Cleaning', icon: 'fas fa-pump-medical', desc: 'Thorough plaque removal' },
  { id: 'braces', name: 'Orthodontics', icon: 'fas fa-teeth', desc: 'Alignment correction' },
  { id: 'checkup', name: 'General Checkup', icon: 'fas fa-stethoscope', desc: 'Routine examination' },
];

const timeSlots = [
  '09:00 AM', '09:45 AM', '10:30 AM', '11:15 AM',
  '01:00 PM', '02:30 PM', '03:15 PM', '04:00 PM',
];

const s = {
  page: {
    paddingTop: '20px',
    background: 'linear-gradient(180deg, #f8f9fa 0%, #fff 100%)',
    paddingBottom: '100px',
  },
  container: { maxWidth: '820px', margin: '0 auto', padding: '0 40px' },
  pageTitle: {
    fontSize: '42px', fontWeight: 700, textAlign: 'center',
    color: '#1a1a1a', marginBottom: '8px',
  },
  pageSubtitle: {
    fontSize: '15px', color: '#666', textAlign: 'center',
    marginBottom: '50px', lineHeight: 1.7,
  },
  accentLine: {
    width: '60px', height: '3px', background: '#7cb342',
    margin: '0 auto 20px', borderRadius: '2px',
  },

  /* ── Progress Bar ── */
  progressWrap: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: '50px', gap: '0',
  },
  stepCircle: (active, done) => ({
    width: '44px', height: '44px', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '15px', fontWeight: 700, flexShrink: 0,
    transition: 'all 0.4s ease',
    background: done ? '#7cb342' : active ? '#1a8bc8' : '#e0e0e0',
    color: done || active ? '#fff' : '#999',
    boxShadow: active ? '0 0 0 6px rgba(26,139,200,0.18)' : done ? '0 0 0 6px rgba(124,179,66,0.18)' : 'none',
  }),
  stepLine: (done) => ({
    width: '90px', height: '3px', flexShrink: 0,
    background: done ? '#7cb342' : '#e0e0e0',
    transition: 'background 0.4s ease',
  }),
  stepLabel: (active, done) => ({
    fontSize: '10px', fontWeight: 600, letterSpacing: '1.2px',
    textTransform: 'uppercase', textAlign: 'center',
    color: done ? '#7cb342' : active ? '#1a8bc8' : '#999',
    marginTop: '8px', transition: 'color 0.3s',
  }),

  /* ── Card ── */
  card: {
    background: '#fff', borderRadius: '16px', padding: '50px',
    boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
  },
  stepTitle: {
    fontSize: '22px', fontWeight: 700, color: '#1a1a1a',
    marginBottom: '6px',
  },
  stepDesc: {
    fontSize: '14px', color: '#999', marginBottom: '32px', lineHeight: 1.6,
  },

  /* ── Treatment Grid ── */
  treatGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px', marginBottom: '10px',
  },
  treatCard: (sel) => ({
    padding: '28px 16px', borderRadius: '12px', textAlign: 'center',
    cursor: 'pointer', transition: 'all 0.3s ease',
    border: sel ? '2px solid #7cb342' : '2px solid #f0f0f0',
    background: sel ? 'rgba(124,179,66,0.06)' : '#fafafa',
    transform: sel ? 'translateY(-2px)' : 'none',
    boxShadow: sel ? '0 8px 24px rgba(124,179,66,0.15)' : 'none',
  }),
  treatIcon: (sel) => ({
    fontSize: '28px', marginBottom: '12px',
    color: sel ? '#7cb342' : '#1a8bc8',
    transition: 'color 0.3s',
  }),
  treatName: {
    fontSize: '13px', fontWeight: 700, color: '#1a1a1a',
    marginBottom: '4px',
  },
  treatDesc: { fontSize: '11px', color: '#999' },

  /* ── Date / Time ── */
  dateLabel: {
    fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px',
    textTransform: 'uppercase', color: '#666', marginBottom: '10px',
    display: 'block',
  },
  dateInput: {
    width: '100%', padding: '14px 16px', border: '2px solid #f0f0f0',
    borderRadius: '10px', fontFamily: "'Poppins', sans-serif",
    fontSize: '15px', color: '#1a1a1a', outline: 'none',
    transition: 'border-color 0.3s', background: '#fafafa',
    marginBottom: '30px',
  },
  timeGrid: {
    display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '10px',
  },
  timeBtn: (sel) => ({
    padding: '12px 22px', borderRadius: '10px', fontSize: '13px',
    fontWeight: 600, fontFamily: "'Poppins', sans-serif",
    cursor: 'pointer', transition: 'all 0.3s',
    border: sel ? '2px solid #7cb342' : '2px solid #f0f0f0',
    background: sel ? '#7cb342' : '#fafafa',
    color: sel ? '#fff' : '#1a1a1a',
    boxShadow: sel ? '0 4px 16px rgba(124,179,66,0.25)' : 'none',
  }),

  /* ── Form fields ── */
  formGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' },
  formGroup: { marginBottom: '0' },
  formGroupFull: { gridColumn: '1 / -1' },
  formLabel: {
    display: 'block', fontSize: '11px', fontWeight: 600,
    letterSpacing: '1.5px', textTransform: 'uppercase',
    color: '#666', marginBottom: '8px',
  },
  formRequired: { color: '#e74c3c' },
  formInput: {
    width: '100%', padding: '14px 16px', border: '2px solid #f0f0f0',
    borderRadius: '10px', fontFamily: "'Poppins', sans-serif",
    fontSize: '15px', color: '#1a1a1a', outline: 'none',
    transition: 'border-color 0.3s', background: '#fafafa',
  },
  formTextarea: {
    width: '100%', padding: '14px 16px', border: '2px solid #f0f0f0',
    borderRadius: '10px', fontFamily: "'Poppins', sans-serif",
    fontSize: '15px', color: '#1a1a1a', outline: 'none',
    transition: 'border-color 0.3s', background: '#fafafa',
    resize: 'vertical', minHeight: '110px',
  },

  /* ── Buttons ── */
  btnRow: {
    display: 'flex', justifyContent: 'space-between',
    marginTop: '36px', gap: '16px',
  },
  btnNext: (disabled) => ({
    padding: '14px 44px', borderRadius: '8px', fontSize: '12px',
    fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
    fontFamily: "'Poppins', sans-serif", cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none', transition: 'all 0.3s',
    background: disabled ? '#e0e0e0' : '#1a8bc8',
    color: disabled ? '#999' : '#fff',
    boxShadow: disabled ? 'none' : '0 4px 16px rgba(26,139,200,0.3)',
    marginLeft: 'auto',
  }),
  btnBack: {
    padding: '14px 30px', borderRadius: '8px', fontSize: '12px',
    fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
    fontFamily: "'Poppins', sans-serif", cursor: 'pointer',
    border: '2px solid #e0e0e0', background: 'transparent',
    color: '#666', transition: 'all 0.3s',
  },
  btnSubmit: {
    padding: '14px 44px', borderRadius: '8px', fontSize: '12px',
    fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
    fontFamily: "'Poppins', sans-serif", cursor: 'pointer',
    border: 'none', background: '#7cb342', color: '#fff',
    boxShadow: '0 4px 16px rgba(124,179,66,0.3)',
    transition: 'all 0.3s', marginLeft: 'auto',
  },

  /* ── Success Receipt ── */
  successWrap: { textAlign: 'center', padding: '20px 0' },
  successIcon: {
    width: '80px', height: '80px', borderRadius: '50%',
    background: 'linear-gradient(135deg, #7cb342, #9ccc65)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 24px', boxShadow: '0 8px 32px rgba(124,179,66,0.3)',
    animation: 'popIn 0.5s ease',
  },
  successCheck: { fontSize: '36px', color: '#fff' },
  successTitle: {
    fontSize: '28px', fontWeight: 700, color: '#1a1a1a',
    marginBottom: '8px',
  },
  successSubtitle: {
    fontSize: '14px', color: '#999', marginBottom: '36px',
  },
  receiptCard: {
    background: '#f8f9fa', borderRadius: '12px', padding: '32px',
    textAlign: 'left', marginBottom: '30px',
  },
  receiptRow: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '14px 0', borderBottom: '1px solid #eee',
  },
  receiptLabel: {
    fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px',
    textTransform: 'uppercase', color: '#999',
  },
  receiptValue: { fontSize: '15px', fontWeight: 600, color: '#1a1a1a' },
  newBookingBtn: {
    padding: '14px 44px', borderRadius: '8px', fontSize: '12px',
    fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
    fontFamily: "'Poppins', sans-serif", cursor: 'pointer',
    border: '2px solid #1a8bc8', background: 'transparent',
    color: '#1a8bc8', transition: 'all 0.3s',
  },
};

const stepLabels = ['Treatment', 'Schedule', 'Details'];

function Appointments() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    treatment: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const updateField = (field, value) => setData((prev) => ({ ...prev, [field]: value }));

  const canNext = () => {
    if (step === 1) return !!data.treatment;
    if (step === 2) return !!data.date && !!data.time;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name.trim() || !data.email.trim() || !data.phone.trim()) return;
    setSubmitted(true);
  };

  const resetAll = () => {
    setStep(1);
    setSubmitted(false);
    setData({ treatment: '', date: '', time: '', name: '', email: '', phone: '', notes: '' });
  };

  const selectedTreatment = treatments.find((t) => t.id === data.treatment);

  return (
    <div style={s.page} id="appointments">
      <style>{`
        @keyframes popIn {
          0% { transform: scale(0.3); opacity: 0; }
          70% { transform: scale(1.08); }
          100% { transform: scale(1); opacity: 1; }
        }
        .appt-input:focus { border-color: #1a8bc8 !important; }
        .appt-time-btn:hover { border-color: #7cb342 !important; }
        .appt-treat-card:hover { border-color: #c5e1a5 !important; background: rgba(124,179,66,0.03) !important; }
        .appt-btn-next:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(26,139,200,0.4) !important; }
        .appt-btn-back:hover { border-color: #1a8bc8 !important; color: #1a8bc8 !important; }
        .appt-btn-submit:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(124,179,66,0.4) !important; }
        .appt-new-booking:hover { background: #1a8bc8 !important; color: #fff !important; }
        @media (max-width: 680px) {
          .appt-treat-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .appt-form-grid { grid-template-columns: 1fr !important; }
          .appt-card { padding: 30px 24px !important; }
        }
        @media (max-width: 480px) {
          .appt-treat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={s.container}>
        <h1 style={s.pageTitle}>Book Appointment</h1>
        <div style={s.accentLine}></div>
        <p style={s.pageSubtitle}>Schedule your visit in three simple steps.<br />We'll confirm your appointment within 24 hours.</p>

        {/* ── Progress Timeline ── */}
        {!submitted && (
          <div style={s.progressWrap}>
            {stepLabels.map((label, i) => {
              const num = i + 1;
              const active = step === num;
              const done = step > num;
              return (
                <div key={num} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={s.stepCircle(active, done)}>
                      {done ? <i className="fas fa-check" style={{ fontSize: '14px' }}></i> : num}
                    </div>
                    <div style={s.stepLabel(active, done)}>{label}</div>
                  </div>
                  {num < 3 && <div style={{ ...s.stepLine(done), marginBottom: '22px' }}></div>}
                </div>
              );
            })}
          </div>
        )}

        {/* ── Main Card ── */}
        <div style={s.card} className="appt-card">

          {/* ── STEP 1: Treatment Selection ── */}
          {!submitted && step === 1 && (
            <>
              <h2 style={s.stepTitle}>Select Your Treatment</h2>
              <p style={s.stepDesc}>Choose the dental service you need. Our specialists will take care of the rest.</p>
              <div style={s.treatGrid} className="appt-treat-grid">
                {treatments.map((t) => (
                  <div
                    key={t.id}
                    className="appt-treat-card"
                    style={s.treatCard(data.treatment === t.id)}
                    onClick={() => updateField('treatment', t.id)}
                  >
                    <div style={s.treatIcon(data.treatment === t.id)}>
                      <i className={t.icon}></i>
                    </div>
                    <div style={s.treatName}>{t.name}</div>
                    <div style={s.treatDesc}>{t.desc}</div>
                  </div>
                ))}
              </div>
              <div style={s.btnRow}>
                <button
                  className="appt-btn-next"
                  style={s.btnNext(!canNext())}
                  disabled={!canNext()}
                  onClick={() => setStep(2)}
                >
                  Next Step →
                </button>
              </div>
            </>
          )}

          {/* ── STEP 2: Date & Time ── */}
          {!submitted && step === 2 && (
            <>
              <h2 style={s.stepTitle}>Pick Date &amp; Time</h2>
              <p style={s.stepDesc}>Select a convenient date and available time slot for your appointment.</p>

              <label style={s.dateLabel}>Preferred Date <span style={s.formRequired}>*</span></label>
              <input
                type="date"
                className="appt-input"
                style={s.dateInput}
                value={data.date}
                onChange={(e) => updateField('date', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />

              <label style={s.dateLabel}>Available Time Slots <span style={s.formRequired}>*</span></label>
              <div style={s.timeGrid}>
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="appt-time-btn"
                    style={s.timeBtn(data.time === t)}
                    onClick={() => updateField('time', t)}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div style={s.btnRow}>
                <button className="appt-btn-back" style={s.btnBack} onClick={() => setStep(1)}>
                  ← Back
                </button>
                <button
                  className="appt-btn-next"
                  style={s.btnNext(!canNext())}
                  disabled={!canNext()}
                  onClick={() => setStep(3)}
                >
                  Next Step →
                </button>
              </div>
            </>
          )}

          {/* ── STEP 3: Contact Details ── */}
          {!submitted && step === 3 && (
            <form onSubmit={handleSubmit}>
              <h2 style={s.stepTitle}>Your Details</h2>
              <p style={s.stepDesc}>Fill in your contact information so we can confirm your booking.</p>

              <div style={s.formGrid} className="appt-form-grid">
                <div style={s.formGroup}>
                  <label style={s.formLabel}>Full Name <span style={s.formRequired}>*</span></label>
                  <input
                    className="appt-input"
                    style={s.formInput}
                    type="text"
                    placeholder="John Doe"
                    value={data.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    required
                  />
                </div>
                <div style={s.formGroup}>
                  <label style={s.formLabel}>Email Address <span style={s.formRequired}>*</span></label>
                  <input
                    className="appt-input"
                    style={s.formInput}
                    type="email"
                    placeholder="john@example.com"
                    value={data.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    required
                  />
                </div>
                <div style={s.formGroup}>
                  <label style={s.formLabel}>Phone Number <span style={s.formRequired}>*</span></label>
                  <input
                    className="appt-input"
                    style={s.formInput}
                    type="tel"
                    placeholder="+61 400 000 000"
                    value={data.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    required
                  />
                </div>
                <div style={{ ...s.formGroup, ...s.formGroupFull }}>
                  <label style={s.formLabel}>Special Requests / Medical Notes</label>
                  <textarea
                    className="appt-input"
                    style={s.formTextarea}
                    placeholder="Any allergies, conditions, or preferences..."
                    value={data.notes}
                    onChange={(e) => updateField('notes', e.target.value)}
                  />
                </div>
              </div>

              <div style={s.btnRow}>
                <button type="button" className="appt-btn-back" style={s.btnBack} onClick={() => setStep(2)}>
                  ← Back
                </button>
                <button type="submit" className="appt-btn-submit" style={s.btnSubmit}>
                  Confirm Booking
                </button>
              </div>
            </form>
          )}

          {/* ── SUCCESS RECEIPT ── */}
          {submitted && (
            <div style={s.successWrap}>
              <div style={s.successIcon}>
                <i className="fas fa-check" style={s.successCheck}></i>
              </div>
              <h2 style={s.successTitle}>Booking Confirmed!</h2>
              <p style={s.successSubtitle}>Your appointment has been scheduled. We'll send a confirmation to your email shortly.</p>

              <div style={s.receiptCard}>
                <div style={s.receiptRow}>
                  <span style={s.receiptLabel}>Treatment</span>
                  <span style={s.receiptValue}>{selectedTreatment?.name || data.treatment}</span>
                </div>
                <div style={s.receiptRow}>
                  <span style={s.receiptLabel}>Date</span>
                  <span style={s.receiptValue}>
                    {data.date ? new Date(data.date + 'T00:00:00').toLocaleDateString('en-AU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                  </span>
                </div>
                <div style={s.receiptRow}>
                  <span style={s.receiptLabel}>Time</span>
                  <span style={s.receiptValue}>{data.time}</span>
                </div>
                <div style={s.receiptRow}>
                  <span style={s.receiptLabel}>Patient</span>
                  <span style={s.receiptValue}>{data.name}</span>
                </div>
                <div style={{ ...s.receiptRow, borderBottom: 'none' }}>
                  <span style={s.receiptLabel}>Email</span>
                  <span style={s.receiptValue}>{data.email}</span>
                </div>
              </div>

              <button
                className="appt-new-booking"
                style={s.newBookingBtn}
                onClick={resetAll}
              >
                Book Another Appointment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Appointments;
